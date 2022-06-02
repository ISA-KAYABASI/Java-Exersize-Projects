package javaExersizeProjects;

import java.util.Scanner;

public class ScannedNumbersFromUserCalculate {
    public static void main(String[] args) {

        int number,totalnumber1 = 0;
        Scanner input = new Scanner(System.in);
        do {
            number= input.nextInt();
            if (number % 2==1) {
               totalnumber1 +=number;
            }
        }while(number > 0);
        System.out.println("number " +totalnumber1);
    }
    }
