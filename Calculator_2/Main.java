package Calculator_2;

public class Main {
	public static double somar(double n1, double n2) {
		return n1+n2;
	}

	public static double subtrair(double n1, double n2) {
		return n1-n2;
	}

	public static double multiplicar(double n1, double n2) {
		return n1*n2;
	}

	public static double dividir(double n1, double n2) {
		return n2 != 0 ? n1/n2 : Double.NaN;
	}

	public static void main(String[] args) {
		System.out.println("Soma: " + somar(6, 4));
        System.out.println("Subtrair: " + subtrair(6, 4));
		System.out.println("Multiplação: " + multiplicar(6, 4));
		System.out.println("Divisão: " + dividir(4, 2));
	}
}

