"""Usage: python scripts/optimize_images.py
Reads every image in assets/source and writes AVIF + WebP + JPG at 480/800px into public/img.
Replace assets/source/hero.png with your real photo and re-run. Needs: pip install pillow (>=11.3 has AVIF)."""
from pathlib import Path
from PIL import Image
SRC, OUT, WIDTHS = Path("assets/source"), Path("public/img"), (480, 800)
OUT.mkdir(parents=True, exist_ok=True)
for f in SRC.glob("*.*"):
    im = Image.open(f).convert("RGB")
    for w in WIDTHS:
        if w > im.width: continue
        r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        r.save(OUT / f"{f.stem}-{w}.jpg", quality=78, optimize=True, progressive=True)
        r.save(OUT / f"{f.stem}-{w}.webp", quality=72, method=6)
        r.save(OUT / f"{f.stem}-{w}.avif", quality=45)
        print("wrote", f.stem, w)
