CREATE TABLE events (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    event_date_start DATE NOT NULL,
    event_date_end DATE
);

INSERT INTO events (name, description, event_date_start, event_date_end) VALUES
    (
        'Atelier dégustation - Éclairs revisités',
        'Atelier pratique autour de la pâte à choux et des garnitures fusion.',
        '2025-02-15',
        NULL
    ),
    (
        'Pop-up pâtisserie au marché de Muret',
        'Stand éphémère avec sélection de créations saisonnières.',
        '2025-03-08',
        '2025-03-09'
    ),
    (
        'Résidence sucrée - Semaine franco-asiatique',
        'Menu signature en rotation quotidienne, collaborations locales.',
        '2025-04-18',
        '2025-04-21'
    );