package javaExersizeProjects;

import java.util.Scanner;

public class FindMinMaxNumberFromInput {
    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter number of entries : ");
        int inputNumber1 = scanner.nextInt();
        int biggestleValue= 0;
        int smallestleValue= 900000000;

        for (int i = 0; i < inputNumber1; i++) {
            int inputNumber2 = scanner.nextInt();

            if (inputNumber2 > biggestleValue){
                biggestleValue = inputNumber2;
            }

            if (i == 0 ){
                smallestleValue = inputNumber2;
            }
            if (smallestleValue > inputNumber2){
                smallestleValue = inputNumber2;
            }
        }
        System.out.println(" Smallest Value = " + smallestleValue);
        System.out.println(" Biggest value " + biggestleValue);
    }
}
