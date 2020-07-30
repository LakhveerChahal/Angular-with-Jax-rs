package com.api.salesdata;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

@Path("/data")
public class SalesRepResource {
	
	@Path("/getReps")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<SalesRepModel> GetAllData() {
		return SalesRepository.GetSalesRepData();
	}
	
	@Path("/getReps/{id}")
	@GET
	@Consumes(MediaType.TEXT_PLAIN)
	public SalesRepModel GetSalesRep(String id) {
		int salesRepId = Integer.parseInt(id);
		return SalesRepository.GetSalesRep(salesRepId);
	}
	
	@Path("/create")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response CreateRep(SalesRepModel salesRepModel, @Context UriInfo uriInfo) {
		int generatedKey = SalesRepository.CreateNewSalesRep(salesRepModel);
		
		UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
		uriBuilder.path(Integer.toString(generatedKey));
		
		return Response.created(uriBuilder.build()).build();
	}
	
	@Path("/delete/{id}")
	@DELETE
	@Consumes(MediaType.TEXT_PLAIN)
	public Response DeleteRep(@PathParam("id") int salesRepId) {
		boolean result = SalesRepository.DeleteSalesRep(salesRepId);
		
		if(result)
			return Response.ok().build();
		else
			return Response.status(404).build();
	}
	
	@Path("/update")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response UpdateRep(SalesRepModel salesRepModel) {
		SalesRepository.UpdateSalesRep(salesRepModel);
		
		return Response.ok().build();
	}
}
