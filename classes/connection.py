from dotenv import load_dotenv
load_dotenv()

import os
import psycopg2

class Connection(object):
  _db=None
  
  def __init__(self):
    self._db = psycopg2.connect(host=os.environ['Host'], database=os.environ['Database'], user=os.environ['User'], password=os.environ['Password'], port=os.environ['Port'])

  def handle(self, sql):
    try:
      cur = self._db.cursor()
      cur.execute(sql)
      cur.close()
      self._db.commit()
    except:
      return False
    
    return True
  
  def query(self, sql):
    rs=None
    try:
      cur=self._db.cursor()
      cur.execute(sql)
      rs=cur.fetchall()
    except:
      return None
    
    return rs

  def NextPK(self, table, key):
    sql = 'SELECT MAX('+key+') from '+table
    rs = self.query(sql)
    pk = rs[0][0]

    return pk+1

  def close(self):
    self._db.close()