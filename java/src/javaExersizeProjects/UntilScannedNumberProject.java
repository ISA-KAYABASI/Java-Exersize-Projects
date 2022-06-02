package javaExersizeProjects;

import java.util.Scanner;

public class UntilScannedNumberProject {
    public static void main(String[] args) {

        Scanner number=new Scanner(System.in);
        System.out.println("Please enter a number : ");
        int scan=number.nextInt();

        for (int i = 1; i <scan; i*=2) {
            System.out.println("i = " + i);
        }
    }
}
