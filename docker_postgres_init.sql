CREATE TABLE event
(
    id bigserial NOT NULL,
    has_barcode BOOLEAN,
    event_info varchar,
    event_location varchar,
    time_of_event timestamp
);

INSERT INTO event(has_barcode, event_info, event_location, time_of_event) VALUES
    (true, 'Tallinn Rock Concert', 'Tallinn', '2022-06-20 21:00:00.000000'),
    (false, 'Big Football Match', 'Tallinn', '2022-06-24 18:00:00.000000'),
    (true, 'Drift Festival', 'Daugavpils', '2022-06-30 14:00:00.000000'),
    (true, 'Theater Play', 'Tartu', '2022-06-25 13:27:01.000000'),
    (true, 'Tallinn Pop Concert', 'Tallinn','2022-07-15 20:00:00.000000');

CREATE TABLE ticket
(
    id bigserial NOT NULL,
    ticket_information varchar,
    validation_code varchar,
    ticket_status varchar,
    event_reference integer
);

INSERT INTO ticket(ticket_information, validation_code, ticket_status, event_reference) VALUES
('Ticket for Tallinn Rock Concert','REF001','SOLD',1),
('Ticket for Tallinn Rock Concert','REF002','VALIDATED',1),
('Ticket for Tallinn Rock Concert','REF003','CANCELLED',1),
('Ticket for Big Football Match','REF001','SOLD',2),
('Ticket for Big Football Match','REF002','SOLD',2),
('Ticket for Big Football Match','REF003','VALIDATED',2),
('Ticket for Big Football Match','REF004','CANCELLED',2),
('Ticket for Drift Festival in Daugavpils','REF001','SOLD',3),
('Ticket for Drift Festival in Daugavpils','REF002','SOLD',3),
('Ticket for Drift Festival in Daugavpils','REF003','VALIDATED',3),
('Ticket for Drift Festival in Daugavpils','REF004','CANCELLED',3),
('Ticket for Theater Play in Tartu','REF001','VALIDATED',4),
('Ticket for Theater Play in Tartu','REF002','VALIDATED',4),
('Ticket for Theater Play in Tartu','REF003','VALIDATED',4),
('Ticket for Tallinn Pop Concert','REF001','SOLD',5),
('Ticket for Tallinn Pop Concert','REF002','VALIDATED',5),
('Ticket for Tallinn Pop Concert','REF003','SOLD',5),
('Ticket for Tallinn Pop Concert','REF004','SOLD',5),
('Ticket for Tallinn Pop Concert','REF005','VALIDATED',5),
('Ticket for Tallinn Pop Concert','REF006','CANCELLED',5);
