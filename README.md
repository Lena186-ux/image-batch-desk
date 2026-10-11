# Image Batch Desk

Independent static product-image utility. No framework or external runtime dependencies. Run `node build.mjs` and deploy `dist/`. Default canonical origin: https://imagebatchdesk.com. `www` and the public Vercel alias redirect to the primary domain.

## Live capabilities

Local PNG/JPEG/WebP import, shared canvas dimensions and color, fit/crop, padding, transparent PNG or JPEG export, per-item status/download and a real ZIP archive. Includes original sample images. 20 images, 15 MB each, source max 60 megapixels, dimensions 64–4096, total encoded results max 150 MB. Original background pixels remain unchanged: canvas color is not background removal. Local resizing is not AI upscaling.

## AI status

No credentials or AI endpoint exist in this release. Google official changelog verified 2026-10-11 lists Nano Banana 2.1 GA on 2026-10-06, API ID `gemini-nano-banana-2.1`.

Sources:
- https://ai.google.dev/gemini-api/docs/changelog
- https://ai.google.dev/gemini-api/docs/image-generation
- https://ai.google.dev/gemini-api/docs/pricing

Pricing snapshot 2026-10-11: Standard output $0.0336 / 1K image, $0.0504 / 2K, $0.113 / 4K, plus input ($1.50/1M tokens), text/thinking ($7.50/1M) and any grounding. Batch output $0.0168 / 1K, $0.0252 / 2K, $0.0567 / 4K; asynchronous batch is a separate integration, not an automatic discount on sequential requests. No free API image tier shown. Budget 100 standard 1K outputs at least $3.36 before inputs and retries. Live quota depends on the user's API project; not verified.

Before enabling AI: user configures GEMINI_API_KEY privately in Vercel server environment (never NEXT_PUBLIC or browser bundle), authorizes a maximum spend, adds authentication, persistent quotas and concurrency limits, checks provider limits and privacy policy, then verifies one authorized image call before larger batches. Require output fidelity review. Do not enable an anonymous billable endpoint. Do not create payments until a payment account and offer are authorized.

## Deployment isolation

Repository https://github.com/Lena186-ux/image-batch-desk; Vercel project image-batch-desk in existing team. This directory is its own Git repository. Do not modify parent configuration or other projects.

Domain imagebatchdesk.com confirmed active on 2026-10-11. Vercel-required apex A records 216.198.79.1 and 64.29.17.1, www CNAME e35814e302449547.vercel-dns-017.com, TTL 3600. Only six default parking A records replaced; _domainconnect TXT and nameservers preserved. Configure GSC/Bing and analytics next if account access is authorized.

## SEO evidence

Parent direction reused historical Google Trends window Oct 4–10, 2026; these are relative interest, not monthly search volume. No trend claims placed on public pages. Gefei load_guide(newwords), 2 credits, request req_6e748495bee7d6d0. Account 20-minute spend was 35 credits, so no additional SEO calls were made.
