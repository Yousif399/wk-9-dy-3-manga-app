from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_login import UserMixin
from werkzeug.security import generate_password_hash
db = SQLAlchemy()

class Manga(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    title = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer)
    price = db.Column(db.Numeric(8, 2))
    img = db.Column(db.String)
    type = db.Column(db.String)
    date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())

    def __init__(self,title,rating,price,img,type):
        self.title = title
        self.rating = rating
        self.price = price
        self.img = img
        self.type = type

    def save_manga(self):
        db.session.add(self)
        db.session.commit()
        
    def save_chnages(self):
        db.session.commit()

    def to_dic(self):
        return {
            'id' : self.id,
            'title' : self.title,
            'rating' : self.rating,
            'price' : self.price,
            'img' : self.img,
            'type' : self.type
        }