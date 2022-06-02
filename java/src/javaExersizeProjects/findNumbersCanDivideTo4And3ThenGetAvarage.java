package javaExersizeProjects;

import java.util.Scanner;

public class findNumbersCanDivideTo4And3ThenGetAvarage {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int number1 = scan.nextInt();
        double totallnumber = 0, dividedTime = 0, avarageDivideTime = 0;

        if (number1 > 0) {

            for (int i = 1; i < number1 + 1; i++) {

                if (number1 % 3 == 0 || number1 % 4 == 0) {
                    totallnumber = totallnumber + 1;
                    dividedTime = dividedTime + 1;
                }
            }
            System.out.println(totallnumber);
            System.out.println("dividedTime = " + dividedTime);
            avarageDivideTime = totallnumber / dividedTime;
            System.out.println("avarageDivideTime = " + avarageDivideTime);

        } else System.out.println("Please enter a valid numebr");

    }
}