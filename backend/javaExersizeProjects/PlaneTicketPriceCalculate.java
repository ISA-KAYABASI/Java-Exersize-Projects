package javaExersizeProjects;

import java.util.Scanner;

public class PlaneTicketPriceCalculate {
    public static void main(String[] args) {
        double Oneway;

        Scanner scan1=new Scanner(System.in);
        System.out.println("Please enter how many kilimotre you want to travel with us : ");
        double kmVoyaje=scan1.nextInt();
        double oneWay= (kmVoyaje*1);

        System.out.println(" 1.OneWay 2.Twoway   Please enter a number");
        int scan2=scan1.nextInt();
        if (scan2==1) {
            System.out.println("Please enter your age : ");
            int scan3=scan1.nextInt();
            if (scan3>0 && scan3<12) {
                double result1=oneWay-(oneWay*0.50);
                System.out.println("Your age lover than 12 you got 50% discount : " +result1);
            } else if (scan3>=12 && scan3<24) {
                double result2=oneWay-(oneWay*0.10);
                System.out.println("Your age between 12 and 24 and you got %10 discount : " + result2);
            } else if ( scan3>65) {
                double result3=oneWay-(oneWay*0.30);
                System.out.println("Your age bigger than 65 and you get %30 discount : = " + result3);
            }else System.out.println("Ticket price is : "+oneWay);

        }else if (scan2 == 2) {
            double twoway= oneWay * 2;
            System.out.println("Please enter your age : ");
            int scan3 = scan1.nextInt();
            if (scan3 > 0 && scan3 < 12) {
                double result1 = (twoway - (twoway * 0.50))*0.8;
                System.out.println("Your age lover than 12 you got 50% discount and for twoway %20 off : " + result1);
            } else if (scan3 >= 12 && scan3 < 24) {
                double result2 = (twoway - (twoway * 0.10))*0.8;
                System.out.println("Your age between 12 and 24 and you got %10 discount and for twoway %20 off : " + result2);
            } else if (scan3 > 65) {
                double result3 = (twoway - (twoway * 0.30))*0.8;
                System.out.println("Your age bigger than 65 and you get %30 discount and for twoway %20 off : = " + result3);
            }else System.out.println("You bought double way and u got %20 discount "+twoway*0.8);
        }else System.out.println("Please enter a valid number");
    }
}
