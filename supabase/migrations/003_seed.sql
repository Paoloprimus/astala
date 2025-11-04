insert into users (id, email, full_name, role) values
  ('00000000-0000-0000-0000-000000000001','seller@example.com','Sara Venditrice','seller'),
  ('00000000-0000-0000-0000-000000000002','buyer@example.com','Bruno Compratore','buyer'),
  ('00000000-0000-0000-0000-000000000003','mario.mediatore@example.com','Mario Mediatore','mediator'),
  ('00000000-0000-0000-0000-000000000004','carla.crediti@example.com','Carla Crediti','credit'),
  ('00000000-0000-0000-0000-000000000005','admin@example.com','Ada Admin','admin')
  on conflict (id) do nothing;

insert into listings (id, seller_id, title, description, base_price, location, gallery_url, status, expires_at) values
  ('10000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000001','Bilocale luminoso','Zona centrale, piano 3, balcone.',120000,'Verona','https://picsum.photos/seed/casa1/800/500','open', now() + interval '7 days'),
  ('10000000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000001','Trilocale con giardino','Quartiere tranquillo, box auto.',175000,'Vicenza','https://picsum.photos/seed/casa2/800/500','open', now() + interval '5 days')
  on conflict (id) do nothing;

insert into offers (id, listing_id, buyer_id, amount, message) values
  ('20000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000002',119000,'Ciao, offerta rapida. Posso chiudere presto.'),
  ('20000000-0000-0000-0000-000000000002','10000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000002',121000,'Aumento leggero, pronta disponibilità.')
  on conflict (id) do nothing;

insert into mediators (id, name, agency, rating_avg, rating_count) values
  ('30000000-0000-0000-0000-000000000001','Studio Verdi','Verdi Agency',4.6,12),
  ('30000000-0000-0000-0000-000000000002','Team Blu','Blu Agency',4.3,9)
  on conflict (id) do nothing;

insert into ai_settings (user_id, opt_in, monthly_limit, used_this_month) values
  ('00000000-0000-0000-0000-000000000001', true, 50, 0),
  ('00000000-0000-0000-0000-000000000002', true, 50, 0)
  on conflict (user_id) do nothing;

insert into ai_logs (id, user_id, type, input_preview, output_preview, tokens_used, mock) values
  ('40000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000001','copy','Genera descrizione bilocale','Bilocale luminoso con balcone...', 40, true),
  ('40000000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000002','price','Suggerisci prezzo','€118.000 - €124.000', 12, true)
  on conflict (id) do nothing;

insert into outbox_emails (id, to_email, subject, html) values
  ('50000000-0000-0000-0000-000000000001','seller@example.com','Hai ricevuto un’offerta','<p>Offerta su Bilocale luminoso</p>')
  on conflict (id) do nothing;
