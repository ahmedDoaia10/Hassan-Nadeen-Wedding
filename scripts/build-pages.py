"""Prepare the invitation for the exact URL supplied by GitHub Pages."""

import argparse
import json
import os
from pathlib import Path
import re
import shutil
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public"
OUTPUT = ROOT / "dist"

parser = argparse.ArgumentParser()
parser.add_argument("--site-url", default=os.environ.get("GITHUB_PAGES_URL"))
args = parser.parse_args()
site_url = (args.site_url or "").rstrip("/") + "/"
parsed = urlparse(site_url)
if parsed.scheme != "https" or not parsed.hostname or parsed.username or parsed.password or parsed.query or parsed.fragment:
    parser.error("Provide the HTTPS site URL from GitHub Pages.")
if any(char in site_url for char in ['"', "'", "<", ">", "\\"]):
    parser.error("The site URL contains an invalid character.")
if OUTPUT.is_symlink():
    raise SystemExit("The generated dist directory must not be a symlink.")
if OUTPUT.exists():
    shutil.rmtree(OUTPUT)
shutil.copytree(SOURCE, OUTPUT)

html_path = OUTPUT / "index.html"
html = html_path.read_text(encoding="utf-8")
old_url = re.search(r'<meta property="og:url" content="([^"]+)">', html)
if not old_url:
    raise SystemExit("Missing invitation canonical metadata.")
html = html.replace(old_url[1], site_url)
html_path.write_text(html, encoding="utf-8")

script_path = OUTPUT / "app.js"
script, count = re.subn(
    r"^const PUBLISHED_URL = [^\n]+;$",
    lambda _: "const PUBLISHED_URL = " + json.dumps(site_url) + ";",
    script_path.read_text(encoding="utf-8"),
    flags=re.MULTILINE,
)
if count != 1:
    raise SystemExit("Missing invitation share URL setting.")
script_path.write_text(script, encoding="utf-8")

# The RSVP service is independent of the public invitation URL.
if "chatgpt.site" in html:
    raise SystemExit("A previous hosting URL remains in the share metadata.")
print("Prepared GitHub Pages invitation: " + site_url)
