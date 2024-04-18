from flask import Blueprint
from utils.api import *
from utils.data.cricket import *

cricket_router = Blueprint('cricker-router', __name__)

@cricket_router.route("/cricket-allrounder-odi")
def cricketallodi():
    
    return cricketAllrounderOdi

@cricket_router.route("/cricket-allrounder-test")
def cricketalltest():
    
    return cricketAllrounderTest

@cricket_router.route("/cricket-allrounder-t20")
def cricketallt20():
    
    return cricketAllrounderT20


# ===========================================================================
@cricket_router.route("/cricket-bowl-odi")
def cricketbowlodi():
    
    return cricketBowlOdi

@cricket_router.route("/cricket-bowl-test")
def cricketbowltest():
    
    return cricketBowlTest

@cricket_router.route("/cricket-bowl-t20")
def cricketbowlt20():
    
    return cricketBowlT20

# ===============================================================================

@cricket_router.route("/cricket-bat-odi")
def cricketbatodi():
    
    return cricketBatOdi

@cricket_router.route("/cricket-bat-test")
def cricketbattest():
    
    return cricketBatTest

@cricket_router.route("/cricket-bat-t20")
def cricketbatt20():
    return cricketBatT20

