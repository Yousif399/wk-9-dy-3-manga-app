
from flask import Blueprint,request, json

from ..models import Manga

api = Blueprint('api', __name__,url_prefix='/api')



@api.get('/manga')
def get_manga():
    manga = Manga.query.all()
    manga_list = [m.to_dic() for m in manga]
    return {
        'status' : 'ok',
        'manga' : manga_list
    }