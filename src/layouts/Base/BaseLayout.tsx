import React, { useContext, useEffect } from 'react'
import { useLazyAxios } from '../../api/use.axios';
import { AuthContext } from '../../context/auth';

interface BaseLayoutProps {
    children: React.ReactNode;
}


function BaseLayout({ children } : BaseLayoutProps) {
    
    const {
        data,
        error,
        loading,
        fetchData: fetchProfile,

    } = useLazyAxios <ProfileApi> ({
        url: '/auth/me'
    })

    const toRefreshProfile = useContext(AuthContext).refresh;

    useEffect(() => {
        
        if (toRefreshProfile) {
            fetchProfile();
        }
        
    }, [toRefreshProfile])


    return (
    <AuthContext.Provider
    
        value = {
            data && error === null
            ? {
                refresh: false,
                isLoggedIn: true,
                id: data.id,
                username: data.username,
                email: data.email,
                firstName: data.first_name,
                lastName: data.last_name,
            }

            : {
                refresh: false,
                isLoggedIn: false,
            }
        }
        >

        <div>{children}</div>
    </AuthContext.Provider>   
  )
}

export default BaseLayout;
