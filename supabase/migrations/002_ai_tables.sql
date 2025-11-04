create table if not exists ai_settings (
user_id uuid primary key references users(id),
opt_in boolean default true,
monthly_limit int default 50,
used_this_month int default 0,
updated_at timestamptz default now()
);


create table if not exists ai_logs (
id uuid primary key,
user_id uuid references users(id),
type text check (type in ('copy','price','message','feedback')),
input_preview text,
output_preview text,
tokens_used int default 0,
mock boolean default true,
created_at timestamptz default now()
);
