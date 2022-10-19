package com.oopsie.shoppingapp.User;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByEmailId(String emailId);

    UserModel save(UserModel user);

    List<UserModel> findAll();
}
