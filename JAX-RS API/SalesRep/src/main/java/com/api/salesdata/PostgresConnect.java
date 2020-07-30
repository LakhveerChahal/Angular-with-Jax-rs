package com.api.salesdata;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PostgresConnect {

	private static final String user = "postgres";
	private static final String password = "lakhveer";
	private static final String url = "jdbc:postgresql://localhost:5432/salesrepdb";
	
	public static Connection connect() {
		Connection conn = null;
		try{
			Class.forName("org.postgresql.Driver");
			conn = DriverManager.getConnection(url, user, password);
			
			if(conn != null) {
				System.out.println("Connected to Database successfully");
			}
			else {
				System.out.println("Failed to make connection");
			}
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return conn;
	}
}
