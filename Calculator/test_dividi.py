import pytest
from calculator import dividir


def test_dividir():
    assert dividir(10, 2) == 5


def test_dividir_por_zero():
    with pytest.raises(ZeroDivisionError):
        dividir(10, 0)
