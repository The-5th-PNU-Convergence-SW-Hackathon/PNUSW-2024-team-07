package com.pinu.familing.global.oauth.dto;

import com.pinu.familing.domain.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

@RequiredArgsConstructor
public class CustomOAuth2User implements OAuth2User {

    private final UserDto userDto;

    //서비스 마다 username을 담는 형태가 다르기 때문에 사용하지 않는다.
    @Override
    public Map<String, Object> getAttributes() {
        return null;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collection = new ArrayList<>();

        collection.add(new GrantedAuthority() {

            @Override
            public String getAuthority() {

                return userDto.role();
            }
        });

        return collection;
    }

    // 유저의 id를 반환한다.
    @Override
    public String getName() {
        return userDto.username();
    }

}
