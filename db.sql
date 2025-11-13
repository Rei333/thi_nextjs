CREATE TABLE events (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    event_date_start DATE NOT NULL,
    event_date_end DATE
);

CREATE TABLE stores (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    address VARCHAR(200) NOT NULL,
    city VARCHAR(70) NOT NULL,
    zip INT NOT NULL,
    phone VARCHAR(14) NOT NULL,
    mail VARCHAR(100) NOT NULL
);

INSERT INTO events (name, description, event_date_start, event_date_end) VALUES
    ('Atelier dégustation - Éclairs revisités', 'Atelier pratique autour de la pâte à choux et des garnitures fusion.', '2025-02-15', NULL),
    ('Pop-up pâtisserie au marché de Muret', 'Stand éphémère avec sélection de créations saisonnières.', '2025-03-08', '2025-03-09'),
    ('Résidence sucrée - Semaine franco-asiatique', 'Menu signature en rotation quotidienne, collaborations locales.', '2025-04-18', '2025-04-21');

INSERT INTO stores (address, city, zip, phone, mail) VALUES
    ('45 Avenue des Champs-Élysées', 'Paris', 75008, '01.42.25.18.90', 'paris-champs@thi-patisserie.fr'),
    ('12 Rue de la République', 'Lyon', 69002, '04.78.37.42.15', 'lyon-republique@thi-patisserie.fr'),
    ('88 La Canebière', 'Marseille', 13001, '04.91.54.32.78', 'marseille-canebiere@thi-patisserie.fr'),
    ('23 Place du Capitole', 'Toulouse', 31000, '05.61.22.18.45', 'toulouse-capitole@thi-patisserie.fr'),
    ('34 Place Stanislas', 'Nancy', 54000, '03.83.35.42.67', 'nancy-stanislas@thi-patisserie.fr'),
    ('52 Rue Nationale', 'Tours', 37000, '02.47.64.38.91', 'tours-nationale@thi-patisserie.fr'),
    ('19 Place de la Comédie', 'Montpellier', 34000, '04.67.58.72.34', 'montpellier-comedie@thi-patisserie.fr'),
    ('41 Rue Saint-Ferréol', 'Marseille', 13006, '04.91.33.56.82', 'marseille-ferreo@thi-patisserie.fr'),
    ('8 Place Bellecour', 'Lyon', 69002, '04.72.40.25.67', 'lyon-bellecour@thi-patisserie.fr'),
    ('76 Avenue Jean Médecin', 'Nice', 6000, '04.93.87.45.23', 'nice-medecin@thi-patisserie.fr'),
    ('29 Rue du Faubourg Saint-Antoine', 'Paris', 75011, '01.43.72.58.91', 'paris-bastille@thi-patisserie.fr'),
    ('14 Place Kléber', 'Strasbourg', 67000, '03.88.32.64.75', 'strasbourg-kleber@thi-patisserie.fr'),
    ('55 Rue Sainte-Catherine', 'Bordeaux', 33000, '05.56.91.47.82', 'bordeaux-catherine@thi-patisserie.fr');