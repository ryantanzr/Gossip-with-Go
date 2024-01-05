package api

import (
	"github.com/ryantanzr/Gossip-with-Go/internal/database"
)

type APIServer struct {
	listenerAddress string
	storage         database.Storage
}
