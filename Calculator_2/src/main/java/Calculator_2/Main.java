package Calculator_2.src.main.java.Calculator_2;

public class Main {

    public double somar(double n1, double n2) {
        return n1 + n2;
    }

    public double subtrair(double n1, double n2) {
        return n1 - n2;
    }

    public double multiplicar(double n1, double n2) {
        return n1 * n2;
    }

    public double dividir(double n1, double n2) {
        return n2 != 0 ? n1 / n2 : Double.NaN;
    }
}
