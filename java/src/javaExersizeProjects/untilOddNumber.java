package javaExersizeProjects;

import java.util.Scanner;

public class untilOddNumber {
    public static void main(String[] args) {

        int number1, number2 = 0;
        Scanner scan = new Scanner(System.in);
        do {
            System.out.println("Please enter a number : ");
            number1 = scan.nextInt();
            System.out.println("Entered number : "+number1);
            if (number1%2==0) {
                number2=number2+number1;
            }
        }
        while (number1 % 2 == 0);
        System.out.println(number1);
        System.out.println(number2);
    }
}
