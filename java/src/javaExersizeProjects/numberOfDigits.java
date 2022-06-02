package javaExersizeProjects;

import java.util.Scanner;

public class numberOfDigits {
    public static void main(String[] args){


        Scanner scn = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int sayi = scn.nextInt();
        int total = 0;

        do{                                //60000
            int lastDigit = sayi % 10;    //0
            sayi = sayi/10;              //6 000
            System.out.print(lastDigit);
            if(sayi != 0){
                System.out.print("+");
            }
            total += lastDigit;
        }while(sayi != 0);

        System.out.print(" = " + total);


    }
}