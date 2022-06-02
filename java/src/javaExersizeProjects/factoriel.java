package javaExersizeProjects;

import java.util.Scanner;

public class factoriel {
    public static void main(String[] args) {



        Scanner scan = new Scanner(System.in);
        System.out.println("faktoriyel yapmak istediginiz sayi : ");
        int n = scan.nextInt();
        int totall= 1;
n=4;

        for (int i = 1; i <= n; i++) {
            totall=totall*i;
        }
        System.out.println(n+" Faktoriyel : "+totall);
    }
}
