# wabori.yoso.one

Wabori (和彫) is Yoso's tattoo site: custom Japanese tattoos from the studio in Miyazaki City. It is one page with the portfolio, the approach, the tattoo process, the studio and booking. It covers tattooing only.

## Files

- `index.html`: the whole page (HTML and CSS in one file; fonts from Google Fonts)
- `assets/works.js`: the list of tattoos in the portfolio, in order
- `assets/list-choice.js`: the newsletter step of the mailing-list form (the same file on every Yoso site)
- `images/`: the photos, plus `yoso-mark.png` (the gold family mark)
- `check.py`, `release.py`, `VERSION`: the safety check and the beta number (see below)
- `CNAME`: serves the site at `wabori.yoso.one`
- `robots.txt`: lets search engines in and keeps AI training crawlers out
- `.nojekyll`: publishes the files as they are, without a Jekyll build

## Adding a tattoo

1. Put the photo in `images/`, about 1000px wide (WebP or JPEG). Use a short file name with no spaces, for example `koi-sleeve.webp`.
2. Open `assets/works.js` and add a line in the place you want it to appear:

   ```js
   { title: "Koi", place: "Sleeve", img: "images/koi-sleeve.webp",
     alt: "Koi sleeve tattoo by Yoso, in colour" },
   ```

   `alt` describes the tattoo for people who cannot see the photo.
3. Publish (below).

To remove a piece, delete its line. To change the order, move the lines.

## Hosting

1. **Settings → Pages → Build and deployment**: *Deploy from a branch*, branch `main`, folder `/ (root)`. (Later, switch Source to **GitHub Actions** so the check below guards every push.)
2. At the DNS provider for `yoso.one`, add a `CNAME` record: name `wabori`, value `yosoone.github.io`.
3. Once the domain resolves, tick **Enforce HTTPS** in the Pages settings.

## Publishing an update (beta number)

The footer shows the site's beta number, for example 'Beta 0.2'. It goes up by one with each update. To publish, in this folder:

```
python3 release.py "What changed"
```

That moves the number up (kept in `VERSION`), writes it into the footer, runs the check below, and commits and pushes. If the check fails, nothing is changed and the number stays where it was.

## Safety: check, publish, undo

**Before publishing**, run the check in this folder:

```
python3 check.py
```

It looks for broken HTML, links to missing files, script errors, a missing hub link or mailing-list form, and a broken `robots.txt`.

**To undo the last change**, in this folder:

```
git revert HEAD
git push
```

**To go back to a known-good version** (kept as branches named `good-YYYY-MM-DD`):

```
git fetch origin
git checkout origin/good-2026-10-21 -- .
git commit -m "Back to the good version of 21 October 2026"
git push
```

## Mailing list

The sign-up form asks for an email address first; pressing **Continue** shows Yoso's newsletters (The Vault, Yosokuro, Shinsei, River, On). Wabori has no newsletter of its own, so none is ticked here. Each ticked box reaches Buttondown as a tag (`one`, `yosokuro`, `shinsei`, `river`, `on`). The step is run by `assets/list-choice.js`; without it the boxes simply show under the email field and the form still works. To add a Wabori newsletter later, add a `wabori` box to every form on every site, `NEWSLETTERS` in every `check.py`, and this list.

## Still to do

- [ ] Japanese version of the page
- [ ] Yoso to check the wording (adapted from yoso.one) and the placement labels on each photo
