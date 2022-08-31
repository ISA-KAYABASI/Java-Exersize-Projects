package javaExersizeProjects;

import java.util.Scanner;

public class MakingStar {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("please enter a number");
        int number1 = scanner.nextInt();
        String star = "*";
        String space = " ";

        for (int i = 0; i < number1; i++) {
            for (int j = 0; j < (number1-i); j++) {
                System.out.print(" ");
            }
            for (int k = 0; k < (2*i+1); k++) {
                System.out.print(star);
            }
            System.out.println("");
        }
        for (int i = number1; i >= 0; i--) {
            for (int j = 0; j < (number1-i); j++) {
                System.out.print(" ");
            }
            for (int k = 0; k < (2*i+1); k++) {
                System.out.print(star);
            }
            System.out.println("");
        }


    }
}
