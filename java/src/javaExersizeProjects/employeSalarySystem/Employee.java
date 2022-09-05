package javaExersizeProjects.employeSalarySystem;

import java.text.SimpleDateFormat;
import java.util.Date;

import static java.lang.System.out;

public class Employee{
    String name;
    double salary;
    int workHours;
    int hireYear;

    double taxP;
    double bonusP;
    double raiseSalaryP;

    Employee ( String  name , int  salary , int workHours , int hireYear )
    {
        this.name = name;
        this.salary = salary;
        this.workHours = workHours;
        this.hireYear = hireYear;
        tax();
        bonus();
        raiseSalary();

    }

    void tax()
    {
        if(salary > 1000)
            taxP += salary * 3 / 100;
    }

    void  bonus ()
    {
        if(workHours > 40)
            bonusP += (workHours - 40) * 30;
    }

    void raiseSalary()
    {
        Date date = new Date();
        SimpleDateFormat getYearFormat = new SimpleDateFormat("yyyy");
        int nowYear = Integer.parseInt(getYearFormat.format(date));

        int yilfarki = nowYear - hireYear;


        if(yilfarki < 10)
            raiseSalaryP += salary * 5 / 100;
        else if(yilfarki > 9 && yilfarki < 20)
            raiseSalaryP += salary * 10 / 100;
        else if(yilfarki > 19)
            raiseSalaryP += salary * 15 / 100;

    }

    public String toString()
    {
        out.println("Adi : " +name);
        out.println("Maasi : " + salary);
        out.println("Calisma Saati : " + workHours);
        out.println("Baslangic Yili : " + hireYear);
        out.println("Vergi : " + taxP);
        out.println("Bonus  : " + bonusP);
        out.println("Maas Artisi  : " + ((bonusP + raiseSalaryP) - taxP));
        out . println ( "Salary with Taxes and Bonuses : " + ( salary + (( bonusP + raiseSalaryP ) - taxP )));
        return null;
    }





}