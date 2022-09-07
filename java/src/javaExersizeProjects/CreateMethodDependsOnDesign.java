package javaExersizeProjects;

import java.util.Scanner;

public class CreateMethodDependsOnDesign {


    static  void  design ( int  N , int  a ){

        if(N>0){
            System.out.print(N + " ");
            design ( N - 5 , a );
        }else{
            desenT ( N , a );
        }
    }
    static  void  desenT ( int N , int  a ) {

        System.out.print(N + " ");

        if(N<a){
            desenT ( N + 5 , a );
        }
    }

    public static void main(String[] args) throws Exception {

        int  N ;

        Scanner input = new Scanner(System.in);

        System.out.println( "Enter a number: " );

        N = input.nextInt();
        int  a = N ;
        design( N , a );
    }
}

