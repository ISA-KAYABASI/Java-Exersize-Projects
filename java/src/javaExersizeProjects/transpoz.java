package javaExersizeProjects;

import java.util.Scanner;

public class transpoz {
    public static void main(String[] args) {
        Scanner input =new Scanner(System.in);
        System.out.println("Olusturalacak satirlari gir: ");
        int r=input.nextInt();
        System.out.println("Olusturulacak sutunlari gir: ");
        int  t = input . nextInt ();
        int[][] matris=new int[r][t];
        int[][] transpoze=new int[t][r];
        for (int i=0;i<r;i++){
            for (int j=0;j<t;j++){
                System.out.print((i+1)+"x"+(j+1)+": ");
                matris[i][j]=input.nextInt();
                transpoze[j][i]=matris[i][j];
            }
        }
        System.out.println("Matris:");
        for (int i=0;i<r;i++){
            for (int j=0; j<t;j++){
                System.out.print(matris[i][j]+"\t");
            }
            System.out.println();
        }
        System.out.println("Transpoze:");
        for (int i=0;i<t;i++){
            for (int j=0;j<r;j++){
                System.out.print(transpoze[i][j]+"\t");
            }
            System.out.println();
        }

    }
}

