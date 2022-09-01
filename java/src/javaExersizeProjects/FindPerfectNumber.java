package javaExersizeProjects;

import java.util.Scanner;

public class FindPerfectNumber {
    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter a number : ");
        int number1 = scanner.nextInt();
        int number2=0;

        for (int i = 1; i < number1; i++) {
//            System.out.println(i);
            if (number1%i == 0) {
                number2 += i;
                System.out.println(number2);
            }
        }
        if (number1 == number2) {
            System.out.println(number2 + " is perfect number");
        } else {
            System.out.println(number1 + " is not perfect number");
        }

    }
}
