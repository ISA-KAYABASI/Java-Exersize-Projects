package javaExersizeProjects;

import java.util.Scanner;

public class ExponentialNumberCalculate {


    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.println("Please enter a number :");
        int scan1 = scan.nextInt();
        System.out.println("Please enter a number :");
        int scan2 = scan.nextInt();

        System.out.println(exponential(scan1,scan2));
    }
    public static int exponential(int scan1, int scan2) {

            if (scan2 == 0) {
                return 1;
            } else if (scan1 == 1) {
                return 1;
            }  else {
            return scan1*exponential(scan1, scan2-1);
            }
    }
}



