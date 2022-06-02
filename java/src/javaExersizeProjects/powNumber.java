package javaExersizeProjects;

import java.util.Scanner;

public class powNumber {
    public static void main(String[] args) {

        int n,k;
        Scanner scan=new Scanner(System.in);
        System.out.println("please enter a number: ");
        n = scan.nextInt();
        System.out.println("pow get number : ");
        k = scan.nextInt();
        int totall= 1;

        for (int i = 0; i <k; i++) {
            totall=totall*n;
        }
        System.out.println(totall);
    }
}
