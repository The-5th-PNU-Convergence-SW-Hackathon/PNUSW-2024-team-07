package com.pinu.familing.global.oauth.dto;

import com.pinu.familing.domain.user.entity.User;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Getter
public class PrincipalDetails implements UserDetails {
    private User user; //컴포지션  우리의 유저 엔티티를 이렇게 가지고 있네..? 신기하다... 그러면 앞으로는 이 PrincipalDetail를 이용해서 엔티티에 접근하는건가? 정말 신기하다묭~

    public void setUser(User user) {
        this.user = user;
    }

    public PrincipalDetails(User user) {
        this.user = user;
    }
    @Override
    public String getPassword() {
        return "password";
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    //계정이 살아있는지 리턴 : ture -> 만료 X / false -> 만료됨
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //계정이 잠기지 않았는지 리턴 : true -> 잠기지 않음
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //비밀번호가 만료되지 않았는지 리턴 : ture -> 만료 X
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //계정이 활성화되어있는지 리턴 : true -> 만료 X
    @Override
    public boolean isEnabled() {
        return true;
    }

    //계정의 권한을 리턴...!!
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() { //타입이 특이하군용..?!
        Collection<GrantedAuthority> collection = new ArrayList<>();
        collection.add(()-> "ROLE_"+user.getRole());
        return collection;
    }
}