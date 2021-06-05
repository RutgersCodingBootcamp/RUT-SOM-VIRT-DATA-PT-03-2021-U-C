import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy import create_engine, MetaData, PrimaryKeyConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float


csvfiles = ["mammal_masses_EA.csv", "mammal_masses_NA.csv"]
engine = create_engine("sqlite:///mammal_masses.sqlite")
conn = engine.connect()

###
# Use SQLAlchemy to model table schema
###
Base = declarative_base()


class EA(Base):
    __tablename__ = 'ea'

    id = Column(Integer, primary_key=True)
    record_id = Column(Integer)
    continent = Column(Text)
    status = Column(Text)
    sporder = Column(Text)
    family = Column(Text)
    genus = Column(Text)
    species = Column(Text)
    log_mass_g = Column(Float)
    comb_mass_g = Column(Float)
    reference = Column(Text)


class NA(Base):
    __tablename__ = 'na'

    id = Column(Integer, primary_key=True)
    record_id = Column(Integer)
    continent = Column(Text)
    status = Column(Text)
    sporder = Column(Text)
    family = Column(Text)
    genus = Column(Text)
    species = Column(Text)
    log_mass_g = Column(Integer)
    comb_mass_g = Column(Integer)
    reference = Column(Text)

    def __repr__(self):
        return f"id={self.id}, name={self.title}"


Base.metadata.create_all(engine)
metadata = MetaData(bind=engine)
metadata.reflect()

###
# Use Pandas to read csv into a list of row objects
###
df = pd.read_csv(csvfiles[0], dtype=object)
ea_data = df.to_dict(orient='records')
###
df = pd.read_csv(csvfiles[1], dtype=object)
na_data = df.to_dict(orient='records')

###
# Insert data into table using SQLAlchemy
###
ea_table = sqlalchemy.Table('ea', metadata, PrimaryKeyConstraint('id'),
                            autoload=True, extend_existing=True)
na_table = sqlalchemy.Table('na', metadata, PrimaryKeyConstraint('id'),
                            autoload=True, extend_existing=True)

conn.execute(ea_table.delete())
conn.execute(ea_table.insert(), ea_data)

conn.execute(na_table.delete())
conn.execute(na_table.insert(), na_data)
