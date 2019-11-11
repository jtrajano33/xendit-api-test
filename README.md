# Xendit Technical Exam

live demo : 

## Instructions

1. Install yarn globally: `npm install -g yarn`
2. Clone the repo `git clone `
3. cd `xendit-api-test`
4. Install dependencies by typing : `yarn`
5. Start the app on `http://localhost:5000` by typing: `yarn start`


# End points

Note: You can test this endpoints on organizations already available or you can add a new comment or member from a different organization by using the end points below.

Available organization to test endpoints:
1.xendit

## Add comment

Adds a comment to the specified organization name

- URL:
    /orgs/:organization/comments

- Method:
    POST

- URL Params:
    Required:
        organization = [ string ]

- Payload:
    Required:
        comment = [ string ]

- Success Response:
    Code: 200
    Content: {
        msg: "Comment Added to xendit",
        comment: {
            status: "active",
            _id: "5dc92c097df052178439a83f",
            comment: "Xending comment",
            organization: "xendit",
            dateCommented: "2019-11-11T09:38:17.203Z"
        }
    }

## Get comments

Get all comments for the specified organization name

- URL:
    /orgs/:organization/comments

- Method:
    GET

- URL Params:
    Required:
        organization = [ string ]

- Success Response:
    Code: 200
    Content: {
        comments: [
            {
                status: "active",
                _id: "5dc92c097df052178439a83f",
                comment: "Xending comment",
                organization: "xendit",
                dateCommented: "2019-11-11T09:38:17.203Z"
            }
        ]
    }

## Delete comments

Deletes all comments for the specified organization name

- URL:
    /orgs/:organization/comments

- Method:
    PUT

- URL Params:
    Required:
        organization = [ string ]

- Success Response:
    Code: 200
    Content: {
        msg: "Comments deleted",
        comments: {
            n: 1,
            nModified: 1,
            ok: 1
        }
    }   

## Get deleted comments

Get all deleted comments for the specified organization name

- URL:
    /orgs/:organization/deleted-comments

- Method:
    GET

- URL Params:
    Required:
        organization = [ string ]

- Success Response:
    Code: 200
    Content: {
        comments: [
            {
                status: "deleted",
                _id: "5dc92c097df052178439a83f",
                comment: "Xending comment",
                organization: "xendit",
                dateCommented: "2019-11-11T09:38:17.203Z"
            }
        ]
    }


    
## Get members

Get all members for the specified organization name in descending order according to followers

- URL:
    /orgs/:organization/members

- Method:
    GET

- URL Params:
    Required:
        organization = [ string ]

- Success Response:
    Code: 200
    Content: {
        members: [
            {
                avatarUrl: "user avatar",
                followers: 55,
                following: 20,
                _id: "5dc6dab4bbe54411a4dd7f77",
                "name": "Bret",
                organization: "xendit",
                lastLogin: "2019-11-09T15:26:44.207Z",
            },
            {
                avatarUrl: "user avatar",
                followers: 45,
                following: 30,
                _id: "5dc6daa2bbe54411a4dd7f76",
                name: "Justin",
                organization: "xendit",
                lastLogin: "2019-11-09T15:26:26.201Z",
            }
        ]
    }

## Add member

Adds a member to the specified organization name

- URL:
    /orgs/:organization/members

- Method:
    POST

- URL Params:
    Required:
        organization = [ string ]

- Payload:
    Required:
        name = [ string ]
    Optional:
        followers = [ number ]
        following = [ number ]
        avatarUrl = [ string ]

- Success Response:
    Code: 200
    Content: {
        msg: "Member Added to xendit",
        member: {
            avatarUrl: "user avatar",
            followers: 0,
            following: 0,
            _id: "5dc9318a7df052178439a840",
            name: "Bret",
            organization: "xendit",
            lastLogin: "2019-11-11T10:01:46.863Z",
        }
    }