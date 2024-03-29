from rest_framework import permissions


class IsBusinessOwner(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_anonymous: return False
        if request.user.is_admin: return True
        return request.user.is_business_owner


class IsApplicant(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_anonymous: return False
        if request.user.is_admin: return True
        return request.user.is_applicant


class IsInvestor(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_anonymous: return False
        if request.user.is_admin: return True
        return request.user.is_investor


class IsAnonymous(permissions.BasePermission):
    def has_permission(self, request, view):
        return not request.user.is_authenticated


class IsAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated


class IsUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user == obj
