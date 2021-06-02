-- Query children table
SELECT * FROM children;

-- Query parents table
SELECT * FROM parents;

-- Query child_parent table
SELECT * FROM child_parent;

-- Query to display the many-to-many relationships
SELECT children.child_name, child_parent.child_id, parents.parent_name, child_parent.parent_id
FROM children
LEFT JOIN child_parent
ON child_parent.child_id = children.child_id
LEFT JOIN parents
ON child_parent.parent_id = parents.parent_id;
