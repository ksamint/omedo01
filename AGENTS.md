<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- ksamint-policy-pointer v1 -->
> **Global agent policy:** this repository follows ksamint ADR-0000 (claudememo01 `global/AGENT-POLICY.md`):
> TypeScript first, Rust first (no new JS) · no CI runners (no GitHub Actions, hosted or self-hosted) · validate locally on the
> exact tree · the agent merges on green local validation · deploy directly from the local deploy machine with automatic
> rollback · hard limits on shared infrastructure, secrets and product rules. Stricter safety rules below still apply.
<!-- /ksamint-policy-pointer -->
