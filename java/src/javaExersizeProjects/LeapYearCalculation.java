package javaExersizeProjects;

import java.util.Scanner;

public class LeapYearCalculation {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Please enter a year : ");
        int year=scan.nextInt();
            if (year%4==0) {
                if (year%100==0) {
                    if (year%400==0) {
                        System.out.println("This is a leap year");
                    }else System.out.println("It is not a leap year");
                }else System.out.println("It is a leap year");
            }else System.out.println("It is not a leap year");
    }
}
