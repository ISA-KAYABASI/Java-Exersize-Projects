package javaExersizeProjects;

import jdk.swing.interop.SwingInterOpUtils;

import javax.swing.plaf.synth.SynthOptionPaneUI;
import java.util.Objects;
import java.util.Scanner;

public class atmProject {
    public static void main(String[] args) {

        String userName="isa";
        String password="KAYABASI";
        Scanner scan=new Scanner(System.in);
        String userName1,password1;
        int number=0;
        int remaining=4,enterance=1,select = 0;


        while(remaining>1){
            System.out.println("Please enter a username : ");
            userName1=scan.nextLine();

            System.out.println("Please enter a password : ");
            password1=scan.nextLine();
            if (Objects.equals(userName1, userName) && Objects.equals(password1, password)) {
                System.out.println("Welcome to ISAMATIK");

                remaining=remaining*0;
                enterance+=5;

            }else {
                remaining--;
            }
        }
        if (enterance>4) {
            System.out.println("You enter your account");
            

            int balance=1000;
            do {
                System.out.println("1.Show my balanace is");
                System.out.println("2.Deposit money to your Account");
                System.out.println("3.Withdraw money from your Account");
                System.out.println("4.Log out from Account");
                select = scan.nextInt();
                switch (select) {
                    case 1:
                        System.out.println("Your balance is : " + balance);
                        break;
                    case 2:
                        System.out.println("Your balance is : " + balance);
                        System.out.println("How much do you want to deposit");
                        int depositMoney = scan.nextInt();
                        balance += depositMoney;
                        System.out.println("Your balance is : " + balance);
                        break;
                    case 3:
                        System.out.println("Your balance is : " + balance);
                        System.out.println("How much do you want to withdraw : ");
                        int withdrawAmount = scan.nextInt();
                        if (withdrawAmount > balance) {
                            System.out.println("Your balance is not sufficient, you can't withdraw more than your balance : " + balance);
                        } else {
                            System.out.println("You withdraw : " + withdrawAmount);
                            balance-=withdrawAmount;
                            System.out.println("Your balance is : " + balance);
                        }
                        break;


                }
            }while(select!=4);
            System.out.println("You log out from your account have a good day");




        }else if (enterance<3) {
            System.out.println("Your account blockked please go to ISA Bank and ask help");
        }
    }
}
