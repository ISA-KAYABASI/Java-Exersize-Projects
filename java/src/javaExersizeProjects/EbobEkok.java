package javaExersizeProjects;

import java.util.Scanner;

public class EbobEkok {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("please enter a number");
        int number1 = scanner.nextInt();

        System.out.println("please enter a second number");
        int number2 = scanner.nextInt();

        int ebob=0;
        int ekok=0;

        if (number1 < number2) {

            for (int i = 1; i <= number1; i++) {
                if (number1%i == 0 && number2%i == 0) {
                    ebob = i;
                }
            }
            System.out.println("ebob = " + ebob);
            ekok= (number1*number2)/ebob;
            System.out.println("ekok = " + ekok);
        }else{
            for (int i = 1; i <= number2; i++) {
                if (number2%i == 0 && number1%i == 0) {
                    ebob = i;
                }
            }
            System.out.println("ebob = " + ebob);
            ekok= (number2*number1)/ebob;
            System.out.println("ekok = " + ekok);
        }
    }
}
