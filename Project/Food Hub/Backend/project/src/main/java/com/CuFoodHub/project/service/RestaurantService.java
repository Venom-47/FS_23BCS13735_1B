package com.CuFoodHub.project.service;

import com.CuFoodHub.project.entity.Restaurant;
import com.CuFoodHub.project.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }


    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }


}