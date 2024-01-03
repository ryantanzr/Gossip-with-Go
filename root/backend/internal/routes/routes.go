package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/ryantanzr/Gossip-with-Go/internal/handlers"
)

func routeSetup(r *gin.Engine) {

	//Registration requests
	registration := r.Group("/successfulRegistration")
	{
		registration.PUT("/successfulRegistration", handlers.successfulRegistration)
	}

	//Login requests
	login := r.Group("/login")
	{
		login.GET("/SuccessfulLogin", handlers.getUserByUsername)
	}
}
