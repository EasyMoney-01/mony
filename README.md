PayFlow - Production-ready backend scaffold
===========================================
This archive contains a production-ready Node/Express backend scaffold with:
  - Stripe webhook handler (signature verification)
  - Wallet credit on payment_intent.succeeded
  - Dockerfile for production
  - Knex config for managed Postgres (DATABASE_URL)
  - Migrations (SQL)
  - Minimal frontend stub

IMPORTANT: Replace secrets in .env.example, run migrations, and deploy using a container host (Render, DigitalOcean App Platform, AWS ECS, etc.).
