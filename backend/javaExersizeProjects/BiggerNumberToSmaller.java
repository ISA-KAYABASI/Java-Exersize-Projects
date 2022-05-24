package javaExersizeProjects;

import java.util.Scanner;

public class BiggerNumberToSmaller {
    public static void main(String[] args) {

        Scanner scan=new Scanner(System.in);
        System.out.println("Please enter a number : ");

        int number1=scan.nextInt();
        int number2=scan.nextInt();
        int number3=scan.nextInt();

        if (number1 > number2 && number2 > number3) {
            System.out.println( "From bigger than smaller : "+number1+" > "+number2+" > "+number3);
        } else if (number1 > number3 && number3 >number2) {
            System.out.println( "From bigger than smaller : "+number1+" > "+number2+" > "+number3);
        } else if (number2 > number3 && number3 >number1) {
            System.out.println( "From bigger than smaller : "+number2+" > "+number3+" > "+number1);
        }else if (number2 > number1 && number1 >number3) {
            System.out.println( "From bigger than smaller : "+number2+" > "+number1+" > "+number3);
        }else if (number3 > number2 && number2 >number1) {
            System.out.println( "From bigger than smaller : "+number3+" > "+number2+" > "+number1);
        }else if (number3 > number1 && number1 >number2) {
            System.out.println( "From bigger than smaller : "+number3+" > "+number1+" > "+number2);
        }else System.out.println("Please enter a valid number");
    }
}
