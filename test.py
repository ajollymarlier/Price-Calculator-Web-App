import unittest
from app import app

class TestConn(unittest.TestCase):

    def test_get_inventory(self):
        tester = app.test_client
        response = tester.get("/api/getInventory")
        status_code = response.status_code
        self.assertEquals(status_code, 200)