CREATE TABLE Gym (
    Gym_ID INTEGER   NOT NULL,
    Gym_Name VARCHAR   NOT NULL,
    Address VARCHAR   NOT NULL,
    City VARCHAR   NOT NULL,
    Zipcode VARCHAR   NOT NULL,
    PRIMARY KEY (Gym_ID)
);

CREATE TABLE Trainers (
    Trainer_ID INTEGER   NOT NULL,
    Gym_ID INTEGER   NOT NULL,
    First_Name VARCHAR   NOT NULL,
    Last_Name VARCHAR   NOT NULL,
    PRIMARY KEY (Trainer_ID)
    FOREIGN KEY(Gym_ID) REFERENCES Gym (Gym_ID);
);

CREATE TABLE Members (
    Member_ID INTEGER   NOT NULL,
    Gym_ID INTEGER   NOT NULL,
    Trainer_ID INTEGER   NOT NULL,
    First_Name VARCHAR   NOT NULL,
    Last_Name VARCHAR   NOT NULL,
    Address VARCHAR   NOT NULL,
    CITY VARCHAR   NOT NULL,
    PRIMARY KEY (Member_ID)
    FOREIGN KEY(Gym_ID) REFERENCES Gym (Gym_ID);
    FOREIGN KEY(Trainer_ID) REFERENCES Trainers (Trainer_ID);
);

CREATE TABLE Payments (
    Payment_ID INTEGER   NOT NULL,
    Member_ID INTEGER   NOT NULL,
    CreditCard_Info INTEGER   NOT NULL,
    Billing_Zip INTEGER   NOT NULL,
    PRIMARY KEY (Payment_ID)
    FOREIGN KEY(Member_ID) REFERENCES Members (Member_ID);
);