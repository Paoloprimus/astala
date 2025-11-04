-- Core tables (MVP-dev: niente RLS per fare in fretta)
);


create index if not exists idx_listings_status_expires on listings(status, expires_at);


create table if not exists offers (
id uuid primary key,
listing_id uuid not null references listings(id) on delete cascade,
buyer_id uuid not null references users(id),
amount integer not null check (amount > 0),
message text,
created_at timestamptz default now()
);


create index if not exists idx_offers_listing_amount on offers(listing_id, amount desc);


create table if not exists ratings (
id uuid primary key,
target_type text check (target_type in ('seller','mediator','credit','app')) not null,
target_id uuid,
stars int check (stars between 1 and 5) not null,
text text,
author_id uuid references users(id),
created_at timestamptz default now()
);


create table if not exists mediators (
id uuid primary key,
name text not null,
agency text,
rating_avg numeric(3,2) default 0,
rating_count int default 0
);


create table if not exists referrals (
id uuid primary key,
listing_id uuid not null references listings(id) on delete cascade,
partner_type text check (partner_type in ('mediator','credit')) not null,
partner_id uuid,
user_id uuid not null references users(id),
created_at timestamptz default now()
);


-- Email finta (outbox) e pagamenti finti (mock)
create table if not exists outbox_emails (
id uuid primary key,
to_email text not null,
subject text not null,
html text,
created_at timestamptz default now()
);


create table if not exists payments (
id uuid primary key,
user_id uuid references users(id),
plan text check (plan in ('free','pro')) default 'free',
status text check (status in ('succeeded','failed','refunded','mocked')) default 'mocked',
created_at timestamptz default now()
);


-- Telemetria minimale UI
create table if not exists ui_metrics (
id uuid primary key,
user_id uuid references users(id),
event text,
meta jsonb,
created_at timestamptz default now()
);
